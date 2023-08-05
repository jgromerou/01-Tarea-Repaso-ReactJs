import { useState } from 'react';
import ModalNew from './ModalNew';
import PropTypes from 'prop-types';

const NewsItem = ({ data }) => {
  const [show, setShow] = useState(false);
  const onClickShowModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };
  return (
    <>
      <div className="feature col text-white" id={`{data.id}`}>
        <h3 className="fs-2">{data.title}</h3>
        <p>{data.description}</p>
        <a href="#" className="text-warning" onClick={onClickShowModal}>
          Call to action
        </a>
      </div>
      <ModalNew
        show={show}
        handleCloseModal={handleCloseModal}
        dataModal={data}
      />
    </>
  );
};

export default NewsItem;

NewsItem.propTypes = {
  data: PropTypes.object.isRequired,
};
