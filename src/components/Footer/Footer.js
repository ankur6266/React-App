import React from 'react'


const footerMenus = [
    {
        menuName: "Policies" ,
        subMenu: [
            {
                name: "Privacy",
                link: "/"
            },
            {
                name: "Shipping",
                link: "/"
            },
            {
                name: "Terms Of Use",
                link: "/"
            },
            {
                name: "Return & Refund",
                link: "/"
            },
        ]
    },
    {
        menuName: "Policies" ,
        subMenu: [
            {
                name: "Privacy",
                link: "/"
            },
            {
                name: "Shipping",
                link: "/"
            },
            {
                name: "Terms Of Use",
                link: "/"
            },
            {
                name: "Return & Refund",
                link: "/"
            },
        ]
    },
]

export default function Footer() {
  return (
    <footer>
        <div className='footerContainer'>
            {footerMenus.map(Menu => {
                return(
                    <div className='MenuBox'>
                        <div className='footerMenuTitle'>{Menu.menuName}</div>
                        <ul className='footerMenuList'>
                            {Menu.subMenu.map(subMenu => {
                                return(
                                    <li className='footerMenuList_item'><a href={subMenu.link}>{subMenu.name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    </footer>
  )
}
