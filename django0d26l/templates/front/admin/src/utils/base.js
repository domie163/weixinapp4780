const base = {
    get() {
        return {
            url : "http://localhost:8080/django0d26l/",
            name: "django0d26l",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "医笙小程序设计与前端开发"
        } 
    }
}
export default base
