import React from 'react';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import './contact.css';
import { IFormValues } from '../../../interfaces/IFormValues';

interface ContactProps {
    mediaQueries: any;
}

export const Contact: React.FC<ContactProps> = (props: any) => {
    const {
        register,
        handleSubmit,
        formState: { errors, submitCount },
        watch,
        clearErrors,
    } = useForm<IFormValues>();
    const onSubmit = (data: IFormValues, e: any) => {
        alert(JSON.stringify(data));
        console.log(data, e);
    };
    /* обработка ошибок */
    const onError = (errors: any, e: any) => console.log(errors.name, e);

    const name = watch('name');
    const phone = watch('phone');
    const email = watch('email');
    const message = watch('msg');
    console.log('WATCH:', name, phone, email, message);

    const containerClassNames = classnames({
        'container-x': props.mediaQueries.isDesktopOrLaptop,
        'container-m': props.mediaQueries.isTabletOrMobile,
        'container-s': props.mediaQueries.isMobile,
    });

    const contactContainerClassNames = classnames({
        'contact-container-x': props.mediaQueries.isDesktopOrLaptop,
        'contact-container-m': props.mediaQueries.isTabletOrMobile,
        'contact-container-s': props.mediaQueries.isMobile,
    });

    const socialBoxClassNames = classnames({
        'contact-container__text-box-x': props.mediaQueries.isDesktopOrLaptop,
        'contact-container__text-box-m': props.mediaQueries.isTabletOrMobile,
        'contact-container__text-box-s': props.mediaQueries.isMobile,
    });

    const formBoxClassNames = classnames({
        'contact-container__form-box-x': props.mediaQueries.isDesktopOrLaptop,
        'contact-container__form-box-m': props.mediaQueries.isTabletOrMobile,
        'contact-container__form-box-s': props.mediaQueries.isMobile,
    });

    const textContactClassNames = classnames({});

    return (
        <div className={containerClassNames}>
            <h3 id="contact">контакты</h3>
            <div className={contactContainerClassNames}>
                <div className={socialBoxClassNames}>
                    <p className={textContactClassNames}>
                        По всем вопросам звоните по телефону:
                        <a href="phone:">+7(777)777-77-77</a>
                        Также можете заполнить форму...
                    </p>
                </div>
                <div className={formBoxClassNames}>
                    <form
                        className="form-box__form"
                        onSubmit={handleSubmit(onSubmit, onError)}
                    >
                        <input
                            type="text"
                            {...register('name', {
                                required:
                                    "Поле 'Имя' обязательно для заполнения",
                                minLength: {
                                    value: 2,
                                    message: 'Слишком короткое имя',
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Слишком длинное имя',
                                },
                            })}
                            placeholder="Имя"
                        />
                        <div className="error-block">
                            {errors.name && (
                                <p className="error-message">
                                    {' '}
                                    {errors.name.message}{' '}
                                </p>
                            )}
                        </div>

                        <input
                            type="text"
                            {...register('phone', {
                                required: 'Введите номер телефона',
                                minLength: {
                                    value: 2,
                                    message: 'Номер слишком короткий',
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Слишком длинный номер',
                                },
                            })}
                            placeholder="Телефон"
                        />
                        <div className="error-block">
                            {errors.phone && (
                                <p className="error-message">
                                    {' '}
                                    {errors.phone.message}{' '}
                                </p>
                            )}
                        </div>

                        <input
                            type="text"
                            {...register('email', {
                                required: 'Введите e-mail',
                            })}
                            placeholder="Email"
                        />
                        <div className="error-block">
                            {errors.email && (
                                <p className="error-message">
                                    {' '}
                                    {errors.email.message}{' '}
                                </p>
                            )}
                        </div>

                        <textarea
                            {...register('msg', {
                                required: 'Введите текст сообщения',
                                minLength: {
                                    value: 2,
                                    message: 'Сообщение слишком короткое',
                                },
                            })}
                            placeholder="Сообщение"
                        ></textarea>
                        <div className="error-block">
                            {errors.msg && (
                                <p className="error-message-textarea">
                                    {' '}
                                    {errors.msg.message}{' '}
                                </p>
                            )}
                        </div>

                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};
