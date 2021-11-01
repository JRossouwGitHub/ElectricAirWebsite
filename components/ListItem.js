import stylesServices from '../styles/Services.module.css'
import Image from 'next/image'
import EASymbol from '../img/Icons/EA Symbol White.png'

const ListItem = ({text}) => {
    return (
        <div className={stylesServices.listItem}>
            <Image
                src={EASymbol}
                alt="Electric Air Symbol Img"
                width={15}
                height={15}
                />
            <span className={stylesServices.text}>{text}</span>
        </div>
    )
}

export default ListItem
