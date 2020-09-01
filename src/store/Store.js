import {observable,action,decorate} from 'mobx';
class Store{
    Name='vaari'
    Url='https://a10.gaanacdn.com/images/song/55/21546455/crop_480x480_1516001169.jpg'
    Title='Vaari Rabata song'
    Description='Darsan Raval'
    VideoLink=''
updateVideoLink=(text)=>{
    this.VideoLink=text
}
updateUrl=(text)=>{
    this.Url=text
}
updateName=(text)=>{
    this.Name=text
}
updateTitle=(text)=>{
    this.Title=text
}
updateDescription=(text)=>{
    this.Description=text
}
}
decorate(Store,{
    Name:observable,
    Url:observable,
    Title:observable,
    Description:observable,
    VideoLink:observable,
    updateVideoLink:observable,
    updateDescription:action,
    updateName:action,
    updateTitle:action,
    updateUrl:action
})
export default new Store();