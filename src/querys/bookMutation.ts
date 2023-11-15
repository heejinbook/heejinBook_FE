import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteLibraryBook, postBookToLibrary } from '../apis/library';

export function useDeleteBook() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (bookId: number) => deleteLibraryBook(bookId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['libraryBook'] });
    },
  });
  return { ...mutation, deleteBookMutate: mutation.mutateAsync };
}

export function usePostBook() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (bookId: number) => postBookToLibrary(bookId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['detailBook'] });
    },
  });
  return { ...mutation, postBookMutate: mutation.mutateAsync };
}
