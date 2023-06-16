

window.onload = function() {
  addTagsClickHandler()
}

const addTagsClickHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
      let clickedTag = e.target
      removeSelectedTags()
      selectClickedTag(clickedTag)
      if (clickedTag.innerText === "All") {
        showAllStrategies()
      } else {
        filterStrategyBySelectedTag(clickedTag.innerText)
      }
    }
  })
}

const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.strategies__tags .tag')
  tags.forEach(tag => {
    tag.classList.remove('tag--selected')
    tag.classList.add('tag--bordered')
  })
}

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.add('tag--selected')
  clickedTag.classList.remove('tag--bordered')
}


const showAllStrategies = () => {
  let strategies = document.querySelectorAll('.strategy-container .strategy')
  strategies.forEach(strategy => {
    strategy.classList.remove('strategy--hidden')
  })
}


const filterStrategyBySelectedTag = (selectedTag) => {
  let strategies = document.querySelectorAll('.strategy-container .strategy')
  strategies.forEach(strategy => {
    strategy.classList.add('strategy--hidden')
    strategy.querySelectorAll('.tag').forEach(tag => {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove('strategy--hidden')
      }
    })
  })
}
