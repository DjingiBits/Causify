export class Kinvey {
  public static readonly baseUrl: string = "https://baas.kinvey.com/"
  public static readonly appKey = "kid_rJ2x2BeQe"
  public static readonly appSecret = "69a9f570e4994fa38d4488d24ec414cd"

  public static appAuthHeaders() {
    return "Basic " + btoa(Kinvey.appKey + ":" + Kinvey.appSecret)
  }

  public static appAuthTokenHeaders() {
    console.log(sessionStorage.getItem("authToken"))
    return "Kinvey " + sessionStorage.getItem("authToken")

  }
}
