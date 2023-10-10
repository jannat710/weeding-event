import moment from 'moment/moment';
import g11 from '../../assets/g11.jpg'

const Blog = () => {
    return (
        <div>
            <h1 className=" font-display text-5xl font-extrabold text-center py-10">Wedding <span className='text-primary'>Blogs</span> of 2023</h1>
            <p className='text-xl text-center'>{moment().format("dddd, MMMM D, YYYY")}</p>
            <img className='h-[70vh] w-9/12 mx-auto my-10' src={g11} alt="" />
        </div>
    );
};

export default Blog;