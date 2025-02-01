import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

ServiceCard.propTypes = { 
  index: PropTypes.number.isRequired, 
  title: PropTypes.string.isRequired, 
  icon: PropTypes.string.isRequired, // Adjust this based on your icon type, e.g., string for image source. 
}; 

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] text-justify">
        Mechanical Design Engineer recently graduated with a Master&apos;s in Digital Design and Manufacture at the University of Edinburgh, with a focus on Mechanical Design. I hold a Bachelor&apos;s in Mechanical Engineering from St. Joseph&apos;s College of Engineering, Chennai. <br className="sm:block hidden" />
        <br className="sm:block hidden" />
        I have experience working with CAD software such as Solidworks, CATIA, AutoCAD, and Fusion 360, along with simulation tools like Abaqus, StarCCM+, and MATLAB. My recent project involved the characterization of Titanium Alloy components manufactured using Electron Beam Melting (EBM) with NeuBeam Technology in collaboration with Wayland Additive Limited. <br className="sm:block hidden" />
        <br className="sm:block hidden" />
        I am passionate about additive manufacturing, process optimization, and innovative design solutions. I am actively applying for roles such as AM Process Engineer, Prototype Engineer, and Design Engineer to expand my expertise in advanced manufacturing technologies further.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};


export default SectionWrapper(About, 'about');
