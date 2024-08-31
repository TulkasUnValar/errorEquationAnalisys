const getDataColors = opacity => {
  const colors = ['#011627', '#FF0022', '#41EAD4', '#FDFFFC', '#B91372']
  return colors.map(color => opacity ? `${color + opacity}` : color)
}