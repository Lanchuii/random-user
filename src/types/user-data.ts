interface IUserData{
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    }
    dob: {
        date: string,
        age: string
    },
    location: {
        country: string,
        city: string
    },
    phone: string,
    email: string,
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    }
}

export default IUserData