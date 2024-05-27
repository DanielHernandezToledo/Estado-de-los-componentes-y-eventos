/* Recibiendo iconos mediante props desde el componente Registro */

export default function SocialButton({facebook, github, linkedin}){

    const tamaño = {width: '40px'}

    return(
        <>
            <a href="www.facebook.com"><img src={facebook} alt="Facebook" style={tamaño} className='border'/></a>
            <a href="www.github.com"><img src={github} alt="Github" style={tamaño} className='border'/></a>
            <a href="www.linkedin.com"><img src={linkedin} alt="Linkedin" style={tamaño} className='border'/></a>
        </>
    )
}