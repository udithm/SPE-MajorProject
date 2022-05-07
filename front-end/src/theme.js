const constants = {
    vote: '#b6b6b6',
    upvote: '#f9920b',
    downvote: '#2e70ff',
    error: '#f5222d'
  };
  
  const dark = {
    ...constants,
    pageBackground: '#1b1b1b',
    border: '#333333',
    foreground: '#262626',
    activeBackground: '#333333',
    inputBackground: '#212121',
    normalText: '#ffffff',
    mutedText: '#b0b8bf',
    accent: '#33a0ff',
    voteButtonHover: '#383838',
    shadow: 'rgba(0, 0, 0, 0.4)'
  };
  
  const light = {
    ...constants,
    pageBackground: '#f4f6f8',
    border: '#ebedf0',
    foreground: '#ffffff',
    activeBackground: '#fafafa',
    inputBackground: '#fcfcfc',
    normalText: '#454f5b',
    mutedText: '#818e99',
    accent: '#1890ff',
    voteButtonHover: '#f2f2f2',
    shadow: 'rgba(0, 0, 0, 0.05)'
  };
  
  const theme = isDark => (isDark ? dark : light);
  
  export default theme;