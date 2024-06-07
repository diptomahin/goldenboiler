import PropTypes from 'prop-types';

const HomeTitle = ({title}) => {
    return (
        <div style={{}} className="text-red-700 text-center my-7 py-5 w-1/2 mx-auto">
           
            <h1 className=""><span className="md:px-10 py-3 my-2 font-bold text-3xl border-red-700 border-y-2  ">{title}</span></h1>
        </div>
    );
};


HomeTitle.propTypes = {
    title: PropTypes.string.isRequired,
  };
  
export default HomeTitle;