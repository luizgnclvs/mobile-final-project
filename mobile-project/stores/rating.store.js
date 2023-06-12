import { create } from 'zustand';

const useStore = create((set) => ({
  reviews: [],
  addReview: (albumId, comment, rating) => set((state) => ({
    reviews: [...state.reviews, { albumId, comment, rating }],
  })),
  getReviewsByAlbumId: (albumId) => {
    return state.reviews.filter((review) => review.albumId === albumId);
  },
}));

export default useStore;

