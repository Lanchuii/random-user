interface IUserData{
    index: number
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    }
    location: string,
    email: string,
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    }
}

export default IUserData