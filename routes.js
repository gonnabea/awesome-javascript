const HOME = "/";

const VIDEO_STORAGE = "/videos";
const VIDEO_UPLOAD = "/videoUpload";
const URL_VIDEO = "/urlVideo";
const EMBEDDEDVIDEO = "/embedded-video";
const VIDEO_DETAIL = "/:id";
const DELETE_VIDEO = "/:id/delete-video";



const LOGIN = "/login";
const LOGOUT = "/logout";

const GOOGLE_LOGIN = "/auth/google";
const GOOGLE_CB = "/auth/google/callback";

const JOIN = "/join";

const FORUM = "/forum";
const CALCULATOR = "/calculator";
const STOPWATCH = "/stop-watch";

// API


const VIDEO_COMMENTS = "/:id/video-comment";
const DELEtE_VIDEO_COMMENT = "/:id/delete-video-comment";
const SHARE_SELECTOR = "/:id/share-selector";

const routes = {
    home: HOME,

    videoStorage: VIDEO_STORAGE,
    videoUpload: VIDEO_UPLOAD,
    urlVideo: URL_VIDEO,
    embeddedVideo: EMBEDDEDVIDEO,
    videoDetail: (id) => {
        if(id){
            return `/videos/${id}`;
        }else{
            return VIDEO_DETAIL
        }
    },
    deleteVideo: (id) =>{
        if(id){
            return `/videos/${id}/delete-video`
        }else{
            return DELETE_VIDEO
        }
    },
    shareSelector: (id) => {
        if(id){
            return `/videos/${id}/share-selector`
        }else{
            return SHARE_SELECTOR
        }
    },
    videoComments: (id) => {
        if(id){
            return `/videos/${id}/video-comment`
        }else{
            return VIDEO_COMMENTS
        }
    },
    deleteVideoComment: (id) => {
        if(id){
            return `/videos/${id}/delete-video-comment`
        }else{
            return DELEtE_VIDEO_COMMENT
        }
    },

    login: LOGIN,
    logout: LOGOUT,

    join: JOIN,

    googleLogin: GOOGLE_LOGIN,
    googleCallback: GOOGLE_CB,

    forum: FORUM,
    calculator: CALCULATOR,
    stopWatch: STOPWATCH
}

export default routes;