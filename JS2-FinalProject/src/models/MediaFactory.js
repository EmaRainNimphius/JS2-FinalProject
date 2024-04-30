import LibraryCollection from "@/models/LibraryCollection.js";
import {AudioBook, Podcast} from "@/models/Media.js";

class MediaFactory {
    static createMedia(type){
        const collection = new LibraryCollection();
        console.log('search results', type);
        type.forEach(type => {

            let newMedia = false;

            if (type.wrapperType === 'audiobook') {
                newMedia = Object.assign(new AudioBook(), type);
            } else if (type.kind === 'podcast') {
                newMedia = Object.assign(new Podcast(), type)
            }
            if(newMedia){
                collection.add(newMedia);
            }
        });

        console.log("New Collection:", collection);
        return collection;
    }

    static createFromLocalStorage(items){
        return this.createMedia(items);
    }
}
export { MediaFactory }