.attr('r', d => parseInt(d.population) * 0.00001)


.attr('fill', d => {
    if (d.country === 'USA') {
      return 'cornflowerblue'
    } else if (d.country === 'Pakistan') {
      return 'gold'
    } else if (d.country === 'Italy') {
      return 'green'
    } else if (d.country === 'Brazil') {
      return 'tomato'
    } else if (d.country === "Canada") {
      return 'purple'
    }
  })