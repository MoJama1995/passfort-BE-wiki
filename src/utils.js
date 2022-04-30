//utils for non db interacting functions

const getRevAtTheTime = (timestamp, revisions) => {
    // filter earlier times,and sort them from high to low
    const earlierRevs = revisions
      .filter(revision => timestamp >= revision)
      .sort((a, b) => b - a);
    //  return first item as this is the latest revision at that time
    // if there are no revisions at that time, return null 
    return earlierRevs.length? earlierRevs[0]: null
  };
  
  module.exports ={ getRevAtTheTime };
  