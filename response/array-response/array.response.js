class ArrayResponse {
    constructor( pageSize , pageNumber , totalRecords ) {
        this.pageSize = pageSize;
        this.pageNumber = pageNumber;
        this.totalRecords = totalRecords;
    }
}

module.exports = ArrayResponse;