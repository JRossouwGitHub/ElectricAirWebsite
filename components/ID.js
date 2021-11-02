import stylesContact from '../styles/Contact.module.css'
import Image from 'next/image'

const ID = ({ID, name, email, mobile}) => {
    return (
        <div>
            <div className={stylesContact.idImg}>
                <div className={stylesContact.img}>
                    <Image
                        src={ID}
                        alt={name + ' ID Img'}
                        width={155}
                        height={278}
                        />
                </div>
                <div className={stylesContact.idDetails}>
                    <span className={stylesContact.green}>Name: </span>{name} <br /><br />
                    <span className={stylesContact.green}>Email: </span>{email} <br /><br />
                    <span className={stylesContact.green}>Mobile: </span>{mobile}
                </div>
            </div>
        </div>
    )
}

export default ID
