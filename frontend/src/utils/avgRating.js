const calculateAvgRating = reviews=>{

    const totatRating = reviews?.reduce((acc, item) => acc + item.rating, 0)
    const avgRating =
      totatRating === 0
        ? ''
        : totatRating === 1
        ? totatRating
        : (totatRating / reviews?.length).toFixed(1);

        return {
            totatRating,
            avgRating
        }
}

export default calculateAvgRating