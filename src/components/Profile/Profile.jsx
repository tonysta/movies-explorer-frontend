import React from 'react';
import Header from '../Header/Header';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({onUpdateUser, handleSignOut}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            email,
        });
    }

    return (
        <>
            <Header>
                <HeaderMain />
            </Header>
            <main>
                <section className='profile__container'>
                    <h1 className='profile__title'>{`Привет, ${name}`}</h1>
                    <form className='profile__form-container'>
                        <label className='profile__input-container'>
                            <h3 className='profile__input-desc'>Имя</h3>
                            <input
                                name='name'
                                className='profile__input'
                                type="text" 
                                required
                                minLength="2"
                                maxLength="30"
                                placeholder='Виталий'
                                value={name || ''}
                                onChange={handleNameChange}
                                />
                        </label>
                        <label className='profile__input-container'>
                            <h3 className='profile__input-desc'>E-mail</h3>
                            <input
                                name='e-mail'
                                className='profile__input'
                                type="text"
                                placeholder='pochta@yandex.ru'
                                required
                                minLength="2"
                                maxLength="30"
                                value={email || ''}
                                onChange={handleEmailChange}
                                />
                        </label>
                    </form>
                    <div className='profile__button-container'>
                        <button className='profile__button_type_edit' type='button' onClick={handleSubmit}>Редактировать</button>
                        <button className='profile__button_type_exit' type='button' onClick={handleSignOut}>Выйти из аккаунта</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile;