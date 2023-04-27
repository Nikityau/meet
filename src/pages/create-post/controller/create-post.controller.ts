import {ChangeEvent} from "../helpers/hooks/useCreateEvent";

import {ICreatePost, useCreatePost} from "../zustand";

export class CreateEventController {

    zustand: ICreatePost = null

    constructor() {

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

            if (
                this.zustand.post.title?.length == 0
                || !this.zustand.post.title
                 && this.zustand.currentStage >= 1
            ) {
                this.error('title', 'title nope')
                isError = true
            }

            if (!this.zustand.post.image &&
                this.zustand.currentStage >= 2
            ) {
                this.error('wrapper', 'no image')
                isError = true
            }

            return isError
        }
        if (key == 'title') {
            if (value.length != 0) {
                this.removeError(key)
            }
        }
        if (key == 'wrapper') {
            if (value) {
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
        if (!savedPost) return null

        return JSON.parse(savedPost)
    }

    change(key: ChangeEvent, value: any) {
        if (this.checkError(key, value)) return

        if (key == 'next') {
            this.zustand.setNextStage()
        }
        if (key == 'finish') {
            // ...send
            localStorage.removeItem('post')
        }

        if (key == 'title') {
            console.log('title')
            this.zustand?.setPostTitle(value)
        }
        if (key == 'wrapper') {
            this.zustand.setImage(value)
        }

        if (key != 'finish') {
            console.log('here')
            this.savePostToLocal()
        }
    }

    setZustand(zustand: ICreatePost) {
        if (!this.zustand) {
            this.zustand = zustand
            const savedPost = this.loadPostFromLocal()
            if (!savedPost) return

            this.zustand.setFullPost(savedPost.post)
            this.zustand.setStage(savedPost.currentStage)

            return;
        }

        this.zustand = zustand
    }
}