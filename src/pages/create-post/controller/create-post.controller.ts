import {ChangeEvent} from "../helpers/hooks/useCreateEvent";

import {ICreatePost, useCreatePost} from "../zustand";

export class CreateEventController {

    zustand: ICreatePost = null

    constructor() {
        console.log('???')
        /*const savedPost = sessionStorage.getItem('post')
        console.log('saved',savedPost)*/
        //if(!savedPost) return

        //this.zustand.setFullPost(JSON.parse(savedPost))
    }

    removeError(key: ChangeEvent) {
        this.zustand?.removeError(key)
    }

    error(key: ChangeEvent, description: string) {
        this.zustand?.setError(key, description)
    }

    checkError(key: ChangeEvent, value: any): boolean {
        console.log(key)
        if (key == 'next') {
            let isError = false
            if (!this.zustand.post) {
                this.error('title', 'title nope')
                return true
            }

            if (this.zustand.post.title?.length == 0 || !this.zustand.post.title) {
                this.error('title', 'title nope')
                isError = true
            }

            if(!this.zustand.post.image) {
                isError = true
            }

            return isError
        }
        if (key == 'title') {
            if (value.length != 0) {
                this.removeError(key)
            }
        }
        if (key == 'finish') {

        }

        return false
    }

    savePostToLocal() {
        localStorage.setItem('post', JSON.stringify({
            post: this.zustand.post,
            currentStage: this.zustand.currentStage
        }))
    }
    loadPostFromLocal() {
        const savedPost = localStorage.getItem('post')
        if(!savedPost) return null

        return JSON.parse(savedPost)
    }

    change(key: ChangeEvent, value: any) {
        if (this.checkError(key, value)) return

        if (key == 'next') {
            this.zustand.setNextStage()
            this.savePostToLocal()
        }
        if(key == 'finish') {
            // ...send
            localStorage.removeItem('post')
        }

        if (key == 'title') {
            console.log('title')
            this.zustand?.setPostTitle(value)
        }
    }

    setZustand(zustand: ICreatePost) {
        if (!this.zustand) {
            this.zustand = zustand
            const savedPost = this.loadPostFromLocal()
            if(!savedPost) return

            this.zustand.setFullPost(savedPost.post)
            this.zustand.setStage(savedPost.currentStage)

            return;
        }

        this.zustand = zustand
    }
}