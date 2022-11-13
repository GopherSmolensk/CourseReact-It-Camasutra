import profileReducer from './profile-reducer';

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hi,i from Russia', likesCount: 123 },
                { id: 2, message: 'Hi, you red', likesCount: 546 },
                { id: 3, message: 'Hi', likesCount: 12 },
                { id: 4, message: 'you red', likesCount: 54666 }
            ],
            newPostText: 'Gopher'
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Екатерина Ермакова' },
                { id: 2, name: 'Дмитрий Фёдоров' },
                { id: 3, name: 'Алексей Фёдоров' },
                { id: 4, name: 'Алексей Овечкин' },
                { id: 5, name: 'Евгений Кузнецов' },
                { id: 6, name: 'Дмитрий Орлов' },
                { id: 7, name: 'Самсонов' },
                { id: 8, name: 'Куууууууч' },
                { id: 9, name: 'Панара' },
                { id: 10, name: 'Кирилл Капризов' },
                { id: 11, name: 'Тов.Майор(ФСБ)' },
                { id: 12, name: 'Владимир Путин' },
                { id: 13, name: 'VAG' },
                { id: 14, name: 'Metallica' },
                { id: 15, name: 'Павел Дацюк' }
            ],
            messages: [
                { id: 1, message: 'Привет! Как дела?' },
                { id: 2, message: 'Всё ок. Мы пошли на пляж позагорать. Потом пивка и самсу жирную бахнем и сиеста))' },
                { id: 3, message: 'Пап меня сквад пушит не могу говорить. Пока' },
                { id: 4, message: 'Yo Yo Yo 900 goals eat!!!!!!' },
                { id: 5, message: 'Мы лучшие!' },
                { id: 6, message: 'Ага))' },
                { id: 7, message: 'Нет, это мы бест фром зе бест!!!' },
                { id: 8, message: 'Мы тоже ничего!' },
                { id: 9, message: 'Так а вообще ещё те wilds!!!' },
                { id: 10, message: 'Хватить херню постить! Смотри сядешь у меня на 20 лет!!' }
            ]
        },
    },
    _callSubscriber() {
        console.log('GopherChange');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);

    }

}

export default store;
window.store = store;