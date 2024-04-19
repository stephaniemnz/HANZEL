export const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };
  
  export const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };
  
  export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  export const trimString = (string, length) => {
    return string.length > length ? string.substring(0, length) + '...' : string;
  };
  