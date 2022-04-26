{
  // Color Variables
  const primaryFontColor = '#1b1464'
  const secondaryFontColor = '#fa8c3a'
  const backgroundPrimaryColor = '#FFFFFF'
  const backgroundSecondaryColor = '#fa8c3a'
  const darkModeFontColor = "#FFFFFF"
  const darkModeBackgroundColor = "#212121"
  const darkModeBackgroundSecondaryColor = "#FFFFFF"
  const filterContrast = 'filter: contrast(0)'

  // Trigger Constrast
  const contrastTrigger = document.querySelector('.contrast')

  // Images
  const images = document.querySelectorAll('.images__contrast')
  
  contrastTrigger.addEventListener('click', function() {
    if (getComputedStyle(document.documentElement).getPropertyValue('--primary-color') != darkModeFontColor) {
      document.documentElement.style.setProperty('--primary-color', darkModeFontColor);
      document.documentElement.style.setProperty('--secondary-color', darkModeFontColor);
      document.documentElement.style.setProperty('--background-primary-color', darkModeBackgroundColor);
      document.documentElement.style.setProperty('--background-secondary-color', darkModeBackgroundSecondaryColor);
      images.forEach(function(image) { image.style.filter = 'contrast(0)'})
    } else {
      document.documentElement.style.setProperty('--primary-color', primaryFontColor);
      document.documentElement.style.setProperty('--secondary-color', secondaryFontColor);
      document.documentElement.style.setProperty('--background-primary-color', backgroundPrimaryColor);
      document.documentElement.style.setProperty('--background-secondary-color', backgroundSecondaryColor);
      images.forEach(function(image) { image.style.filter = 'contrast(1)'})
    }
  })
}