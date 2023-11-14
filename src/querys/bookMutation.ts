import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteLibraryBook } from '../apis/library';

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
