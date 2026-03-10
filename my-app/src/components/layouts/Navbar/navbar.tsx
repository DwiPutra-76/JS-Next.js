import style from '@/components/layouts/Navbar/navbar.module.css';

const Navbar = () => {
    return(
        // cara memanggil class dari navbar.module.css
    <div className={style.navbar}>
        {/* cara memanggil class dari globals.css */}
        <h1 className='ukuran'>Navbar</h1> 
    </div>
    )
}

export default Navbar;