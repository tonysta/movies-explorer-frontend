import React from 'react';
import Header from '../Header/Header';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/validation';

function Profile({onUpdateUser, handleSignOut, profileErrMsg, setProfileErrMsg, success}) {
    const currentUser = React.useContext(CurrentUserContext);

    const validate = useFormWithValidation();
    
    if (currentUser.email === validate.values.email) {
        validate.isValid = false;
    }
    const { name, email } = validate.errors;


    function handleSubmit(e) {
        e.preventDefault();
        const { name, email } = validate.values;

        onUpdateUser({
            name,
            email,
        })
        validate.resetForm();
        setProfileErrMsg('');
    }

    return (
        <>
            <Header>
                <HeaderMain />
            </Header>
            <main>
                <section className='profile__container'>
                    <h1 className='profile__title'>{`Привет, ${currentUser.name}`}</h1>
                    <form className='profile__form-container' name='profile' noValidate>
                        <label className='profile__input-container'>
                            <h3 className='profile__input-desc'>Имя</h3>
                            <input
                                name='name'
                                className='profile__input'
                                type="text" 
                                required
                                pattern='[A-Za-zА-Яа-яЁё]+'
                                minLength="2"
                                maxLength="30"
                                placeholder='Виталий'
                                value={validate.values.name || ''}
                                onChange={validate.handleChange}
                                />
                        </label>
                        <span className='auth__input-error'>{name}</span>
                        <label className='profile__input-container'>
                            <h3 className='profile__input-desc'>E-mail</h3>
                            <input
                                name='email'
                                className='profile__input'
                                type="text"
                                placeholder='pochta@yandex.ru'
                                required
                                pattern='^(\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+[,;]?[ ]?)+$'
                                minLength="2"
                                maxLength="30"
                                value={validate.values.email || ''}
                                onChange={validate.handleChange}
                                />
                        </label>
                        <span className='auth__input-error'>{email}</span>
                    </form>
                    {
                        success? 
                        <span className='auth__success'>Данные успешно изменены</span>:
                        <span className='auth__error'>{profileErrMsg}</span>
                    }
                    
                    <div className='profile__button-container'>
                        <button className={validate.isValid === true ? 'profile__button_type_edit' : 'profile__button_type_disabled'} type='button' onClick={handleSubmit} disabled={validate.isValid === false}>Редактировать</button>
                        <button className='profile__button_type_exit' type='button' onClick={handleSignOut}>Выйти из аккаунта</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile;