class ApiResponse {
    constructor(statuscode , data , message="Success"){
        this.statuscode=statuscode
        this.data=message
        this.message=message
        this.success=statuscode < 400
    }
}