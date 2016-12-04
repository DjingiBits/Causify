import {Component, Input} from '@angular/core'
import { IComment } from './Comment'
import { CommentsService } from '../../services/comments.service'

@Component({
    selector : 'comment-box',
    templateUrl : 'app/comments/comment.component.html',
    styleUrls : [ 'app/comments/comment.component.css' ],
    providers : [ CommentsService ]
})

export class CommentComponent {
    comments: IComment[]
    private commentService: CommentsService
    @Input() causeId : string
    errorMessage: any

    commentData = {
        content: ""
    };

    constructor(commentService: CommentsService) {
        this.commentService = commentService
    }

    addComment() {

        const { content } = this.commentData
        this.commentData['author'] = sessionStorage.getItem('username');
        this.commentData['causeId'] = this.causeId
        this.commentService.postComment(this.commentData)
            .subscribe(
                () => console.log('Comment created'),
                error => this.errorMessage = <any>error
            );

    }

    ngOnInit(): void {
        this.commentService.getComments(this.causeId)
            .subscribe(
                commentsArr => {

                    for (let i = 0; i < commentsArr.length; i++) {
                        let comment = commentsArr[i];
                        if(comment.causeId != this.causeId){
                            commentsArr.splice(i,1);
                            i--;
                        }
                    }
                    this.comments = commentsArr;
                     console.log(JSON.stringify(commentsArr))
                },
                        error => this.errorMessage = <any>error
            );
    }
}
