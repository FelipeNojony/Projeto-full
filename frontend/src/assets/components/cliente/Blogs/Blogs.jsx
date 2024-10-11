import './index.css';
import PropTypes from 'prop-types';

export default function Blogs({ 
  isOpen, 
  onClose, 
  title, 
  titleDois, 
  content, 
  subtitle, 
  contentDois, 
  subtitleDois, 
  contentTres, 
  subtitleTres, 
  contentQuatro, 
  subtitleQuatro, 
  contentCinco, 
  subtitleCinco, 
  contentSeis 
}) {

  if (!isOpen) return null;

  return (
    <>  
      <div className="fundo">
        <div className="container" id='btn-lp'>
          <button onClick={onClose}>Voltar</button>
        </div>

        <div className="div-lpb container">
          <div className="lpb-origin">
            <h5 className="title-lpb">
              <span>{title}</span> {titleDois}
            </h5>
    
            <p className="text-lpb">
              {content}
            </p>

            {/* Primeiro subtítulo dinâmico */}
            <div className="spans">
              <span className="spn">
                {subtitle}
              </span>
              <p className="text-spn">
                {contentDois}
              </p>
            </div>

            {/* Segundo subtítulo dinâmico */}
            <div className="spans">
              <span className="spn">
                {subtitleDois}
              </span>
              <p className="text-spn">
                {contentTres}
              </p>
            </div>

            {/* Terceiro subtítulo dinâmico */}
            <div className="spans">
              <span className="spn">
                {subtitleTres}
              </span>
              <p className="text-spn">
                {contentQuatro}
              </p>
            </div>

            {/* Quarto subtítulo dinâmico */}
            <div className="spans">
              <span className="spn">
                {subtitleQuatro}
              </span>
              <p className="text-spn">
                {contentCinco}
              </p>
            </div>

            {/* Quinto subtítulo dinâmico */}
            <div className="spans">
              <span className="spn">
                {subtitleCinco}
              </span>
              <p className="text-spn">
                {contentSeis}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Blogs.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  titleDois: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentDois: PropTypes.string.isRequired,
  contentTres: PropTypes.string.isRequired,
  contentQuatro: PropTypes.string.isRequired,
  contentCinco: PropTypes.string.isRequired,
  contentSeis: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  subtitleDois: PropTypes.string.isRequired,
  subtitleTres: PropTypes.string.isRequired,
  subtitleQuatro: PropTypes.string.isRequired,
  subtitleCinco: PropTypes.string.isRequired,
};