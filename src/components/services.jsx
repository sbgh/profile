
import $ from 'jquery';
import { FaLinkedin, FaCloudDownloadAlt, FaGithub } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const title = 'We Do Web'
const servicesArrays = []

//1
servicesArrays.push([
'Visually Stunning and Engaging Presentation',
'Our team excels in creating eye-catching, dynamic, and immersive eCommerce websites. We use cutting-edge design techniques, including 3D effects and animations, to captivate your customers from the moment they land on your site, driving engagement and enhancing user experience.'
])
//2
servicesArrays.push(['Custom WordPress Themes for Unique Brand Identity',
'We specialize in building custom WordPress themes that align with your brand’s identity and business goals. With a focus on customization, our themes are built to be both visually appealing and functionally robust, ensuring that your eCommerce store stands out in a competitive market.'
])
//3
servicesArrays.push(['State-of-the-Art Security Protocols',
'Security is paramount in eCommerce, and we implement top-notch security features throughout your site. From secure payment gateways to encrypted customer data storage and protection against cyber threats, we ensure that your store is secure for both you and your customers.'
])
//4
servicesArrays.push(['Node.js and React for High-Performance Full-Stack Solutions',
'Our development team uses Node.js and React to build scalable, responsive, and fast-loading eCommerce platforms. These technologies ensure seamless server-side processing and smooth client-side experiences, even with complex functionalities or high-traffic demands.'
])
//5
servicesArrays.push(['Complex UIs that are Intuitive and User-Friendly',
'We create sophisticated yet easy-to-navigate user interfaces, combining aesthetic appeal with user-centric design principles. This results in a seamless shopping experience, guiding users effortlessly from product browsing to checkout with minimal friction.'
])
//6
servicesArrays.push(['Powerful Backend Infrastructure to Handle Complex Operations',
'We design complex backend systems, including proxies and integrated APIs, to ensure that your eCommerce store runs efficiently. Whether handling large databases, managing user sessions, or ensuring smooth API interactions, our backend development ensures speed, reliability, and scalability.'
])
//7
servicesArrays.push(['Custom eCommerce Stores with Integrated Payment APIs',
'Our full-stack team excels in building tailored online stores with integrated, secure payment solutions. Whether it’s PayPal, Stripe, or other custom payment gateways, we ensure that transactions are safe, fast, and convenient for your customers.'
])
//8
servicesArrays.push(['Advanced eCommerce Features for Unique Business Needs',
'We specialize in developing custom features tailored to your business needs, such as multi-currency support, subscription-based services, complex product configurations, and advanced inventory management systems. Our solutions provide everything you need to scale your business online.'
])
//9
servicesArrays.push(['Seamless Integration with 3rd-Party Tools and Plugins',
'Our services include smooth integration with various third-party tools, including CRM systems, inventory management, email marketing platforms, and analytics tools. This enables your eCommerce site to be a fully functional hub for your business operations.'
])
//10
servicesArrays.push(['Future-Ready Development with Scalable Architecture',
'We build your eCommerce site with scalability in mind, ensuring it grows as your business does. Using modern frameworks like React and Node.js, we create architectures that can easily handle future upgrades, additional features, and increased traffic.'
])

const IconsArr = [
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-circle-outline</title><path d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11M12,8C14.63,8 17,9.57 18,12C16.62,15.31 12.81,16.88 9.5,15.5C7.92,14.84 6.66,13.58 6,12C7,9.57 9.37,8 12,8M12,9.5A2.5,2.5 0 0,0 9.5,12A2.5,2.5 0 0,0 12,14.5A2.5,2.5 0 0,0 14.5,12A2.5,2.5 0 0,0 12,9.5" /></svg>',
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>wordpress</title><path d="M3.42,12C3.42,10.76 3.69,9.58 4.16,8.5L8.26,19.72C5.39,18.33 3.42,15.4 3.42,12M17.79,11.57C17.79,12.3 17.5,13.15 17.14,14.34L16.28,17.2L13.18,8L14.16,7.9C14.63,7.84 14.57,7.16 14.11,7.19C14.11,7.19 12.72,7.3 11.82,7.3L9.56,7.19C9.1,7.16 9.05,7.87 9.5,7.9L10.41,8L11.75,11.64L9.87,17.27L6.74,8L7.73,7.9C8.19,7.84 8.13,7.16 7.67,7.19C7.67,7.19 6.28,7.3 5.38,7.3L4.83,7.29C6.37,4.96 9,3.42 12,3.42C14.23,3.42 16.27,4.28 17.79,5.67H17.68C16.84,5.67 16.24,6.4 16.24,7.19C16.24,7.9 16.65,8.5 17.08,9.2C17.41,9.77 17.79,10.5 17.79,11.57M12.15,12.75L14.79,19.97L14.85,20.09C13.96,20.41 13,20.58 12,20.58C11.16,20.58 10.35,20.46 9.58,20.23L12.15,12.75M19.53,7.88C20.2,9.11 20.58,10.5 20.58,12C20.58,15.16 18.86,17.93 16.31,19.41L18.93,11.84C19.42,10.62 19.59,9.64 19.59,8.77L19.53,7.88M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,21.54C17.26,21.54 21.54,17.26 21.54,12C21.54,6.74 17.26,2.46 12,2.46C6.74,2.46 2.46,6.74 2.46,12C2.46,17.26 6.74,21.54 12,21.54Z" /></svg>',
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>security</title><path d="M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z" /></svg>',
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>nodejs</title><path d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z" /></svg>',
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>language-html5</title><path d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z" /></svg>',
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-decision-auto-outline</title><path d="M19,15V12C18.5,12 14.5,12.16 14.05,16.2C15.61,16.75 16.43,18.47 15.88,20.03C15.33,21.59 13.61,22.41 12.05,21.86C10.5,21.3 9.67,19.59 10.22,18.03C10.5,17.17 11.2,16.5 12.05,16.2C12.34,12.61 15.4,9.88 19,10V7L23,11L19,15M14,19A1,1 0 0,0 13,18A1,1 0 0,0 12,19A1,1 0 0,0 13,20A1,1 0 0,0 14,19M12,11.12C12.58,10.46 13.25,9.89 14,9.43V5H17L13,1L9,5H12V11.12M7.2,6H5.2L2,15H3.9L4.6,13H7.8L8.5,15H10.4L7.2,6M5.05,11.65L6.2,8L7.35,11.65H5.05Z" /></svg>',
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-credit-card-outline</title><path d="M7 4C4.8 4 3 5.8 3 8S4.8 12 7 12 11 10.2 11 8 9.2 4 7 4M7 10C5.9 10 5 9.1 5 8S5.9 6 7 6 9 6.9 9 8 8.1 10 7 10M7 14C3.1 14 0 15.8 0 18V20H11V18H2C2 17.4 3.8 16 7 16C8.8 16 10.2 16.5 11 17V14.8C9.9 14.3 8.5 14 7 14M22 4H15C13.9 4 13 4.9 13 6V18C13 19.1 13.9 20 15 20H22C23.1 20 24 19.1 24 18V6C24 4.9 23.1 4 22 4M16 18H15V6H16V18M22 18H18V6H22V18Z" /></svg>',
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cash-register</title><path d="M2,17H22V21H2V17M6.25,7H9V6H6V3H14V6H11V7H17.8C18.8,7 19.8,8 20,9L20.5,16H3.5L4.05,9C4.05,8 5.05,7 6.25,7M13,9V11H18V9H13M6,9V10H8V9H6M9,9V10H11V9H9M6,11V12H8V11H6M9,11V12H11V11H9M6,13V14H8V13H6M9,13V14H11V13H9M7,4V5H13V4H7Z" /></svg>',
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>api</title><path d="M7 7H5A2 2 0 0 0 3 9V17H5V13H7V17H9V9A2 2 0 0 0 7 7M7 11H5V9H7M14 7H10V17H12V13H14A2 2 0 0 0 16 11V9A2 2 0 0 0 14 7M14 11H12V9H14M20 9V15H21V17H17V15H18V9H17V7H21V9Z" /></svg>',
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trending-up</title><path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" /></svg>'
]



// servicesArrays.push(['Web Application Design and Development',
//     'Web applications with rich UIs and functionality. If your business wants eye catching visuals and amazing functionality, you have come to the right place!'])
// servicesArrays.push(['eCommerce web development',
//     'Great presentation and a great customer experience. We can provide it all because we have 30 years experience'])
// servicesArrays.push(['Cloud Management',
//     'Enhanced security and compliance for web applications. Cost-effective scaling for high-traffic websites. Seamless deployment and continuous integration.'])
// servicesArrays.push(['Infrastructure Consulting',
//     'Besides web applications we are also experts in systems administration and enterprise software management. Our skills range from bare metal deployments to configuration management.'])
// servicesArrays.push(['Automation and Scripting',
//     'We have lots of experience creating detailed code to handle complex tasks. We\'ll make your business processes go from pain to perfect. '])

setTimeout(function (title, servicesArrays) {

    var x = Math.random() * 2 - 1
    var y = Math.random() * 2 - 1
    var r = Math.random() * 2 - 1

    var serviceEle = $($.parseHTML('<div id="serviceCategory" class="serviceCategoryRow"></div>'))

    $('#servicesCol').append(serviceEle)
    
    for(let n in title.split(" ")){
        x = Math.random() * 2 - 1
        y = Math.random() * 2 - 1
        r = Math.random() * 2 - 1
        let wrd=title.split(" ")[n]
        wrd = wrd +  "&nbsp;" 
        $("#serviceCategory" ).append('<div class="serviceCategory flutter" data-x=' + x + ' data-y=' + y + ' data-r=' + r + '><span>' + wrd + '</span></div>')    
    }


    serviceEle = $($.parseHTML('<div id="serviceList" class="serviceList row"></div>'))
    $('#servicesCol').append(serviceEle)

    for (let ind in servicesArrays) {
        const name = servicesArrays[ind][0]
        const desc = servicesArrays[ind][1]
        const icon = IconsArr[ind]
        
        $("#serviceList").append('<div class="serviceItem serviceItem'+ind+'"><div class="iconHolder"></div><div class="serviceItemNameHolder"></div><div class="serviceItemDescHolder"></div></div>')

        x = Math.random() * 2 - 1
        y = Math.random() * 2 - 1
        r = Math.random() * 2 - 1
        $(".serviceItem"+ind+" .iconHolder" ).append('<span class="serviceItemIcon flutter" data-x=' + x + ' data-y=' + y + ' data-r=' + r + '></span>');
        $(".serviceItem"+ind+" span.serviceItemIcon" ).append("<span class='iconSpan'>" + icon + "</span>");

        for(let n in name.split(" ")){
            x = Math.random() * 2 - 1
            y = Math.random() * 2 - 1
            r = Math.random() * 2 - 1
            let wrd=name.split(" ")[n]
            wrd = wrd +  "&nbsp;" 
            $(".serviceItem"+ind+" .serviceItemNameHolder" ).append('<span class="serviceItemName flutter" data-x=' + x + ' data-y=' + y + ' data-r=' + r + '><span>' + wrd + '</span></span>')    
        }

        for(let n in desc.split(" ")){
            x = Math.random() * 2 - 1
            y = Math.random() * 2 - 1
            r = Math.random() * 2 - 1
            let wrd=desc.split(" ")[n]
            wrd = wrd +  "&nbsp;" 
            $(".serviceItem"+ind+" .serviceItemDescHolder").append('<span class="serviceItemDescription flutter" data-x=' + x + ' data-y=' + y + ' data-r=' + r + '><span>' + wrd + '</span></span>')
        }
    }

}, 200, title, servicesArrays)

const Services = () => {

    return (
        <div>
            <div className="servicesSection">
                <Container fluid>
                    <Row>
                        <Col id='servicesCol' className='servicesCol'>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Services