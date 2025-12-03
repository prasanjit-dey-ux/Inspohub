
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 mt-20 mb-32">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="text-sm text-neutral-500 hover:text-blue-700 transition-colors"
        >
          Prev
        </button>
      )}

      <span className="text-sm text-neutral-400">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="text-sm text-neutral-500 hover:text-blue-700 transition-colors"
        >
          Next
        </button>
      )}
    </div>
  );
}