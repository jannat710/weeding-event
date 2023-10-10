import g1 from '../../assets/g1.jpg'
import g2 from '../../assets/g2.jpg'
import g3 from '../../assets/g3.jpg'
import g4 from '../../assets/g4.jpg'
import g5 from '../../assets/g5.jpg'
import g6 from '../../assets/g6.jpg'
import g7 from '../../assets/g7.jpg'
import g8 from '../../assets/g8.jpg'
import g9 from '../../assets/g9.jpg'
import g10 from '../../assets/g10.jpg'
import g11 from '../../assets/g11.jpg'
import g12 from '../../assets/g12.jpg'

const Photography = () => {
    return (
        
       <div>
        <h1 className='font-display text-5xl text-center  font-bold'>Photography</h1>
         <div className=" w-full mx-auto p-5 gap-5 bg-base-100 shadow-xl image-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-lg" >
            
            <figure><img className='rounded-lg' src={g1} /></figure>
            <figure><img className='rounded-lg' src={g2} /></figure>
            <figure><img className='rounded-lg' src={g3} /></figure>
            <figure><img className='rounded-lg' src={g4} /></figure>
            <figure><img className='rounded-lg' src={g5} /></figure>
            <figure><img className='rounded-lg' src={g6} /></figure>
            <figure><img className='rounded-lg' src={g7} /></figure>
            <figure><img className='rounded-lg' src={g8} /></figure>
            <figure><img className='rounded-lg' src={g9} /></figure>
            <figure><img className='rounded-lg' src={g10} /></figure>
            <figure><img className='rounded-lg' src={g11} /></figure>
            <figure><img className='rounded-lg' src={g12} /></figure>
        </div>
       </div>
    );
};

export default Photography;