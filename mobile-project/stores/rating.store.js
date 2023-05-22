import create from 'zustand';

const useStore = create((set) => ({
  reviews: [],
  addReview: (albumId, comment, rating) => set((state) => ({
    reviews: [...state.reviews, { albumId, comment, rating }],
  })),
}));

export default useStore;
