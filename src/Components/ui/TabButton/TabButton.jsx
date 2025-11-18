// src/components/ui/TabButton/TabButton.jsx
import PropTypes from 'prop-types';

export const TabButton = ({ 
  icon: Icon, 
  label, 
  isActive, 
  onClick, 
  isDark = false 
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
          : isDark
          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );
};

TabButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isDark: PropTypes.bool
};