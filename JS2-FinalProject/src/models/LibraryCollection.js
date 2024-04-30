import Content from "@/models/Content.js";
import MediaItem from "@/models/MediaItem.js";

export default function LibraryCollection() {

    let arr = [];

    arr.addItem = function(item){
        if(item.type === 'Content'){
            this.push(new Content(item));
        }
        return this;
    }

    // for media
    arr.add = function(media){
        this.push(new MediaItem(media));
        return this;
    }

    // arr.remove = function(item){
    //     this.splice(this.indexOf(item), 1)
    //
    //     return this;
    // }


    return arr;
}
