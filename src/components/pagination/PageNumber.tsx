interface pageNumberProps {
  pages: number[];
  plusOne?: Boolean;
  plusFive?: Boolean;
  minusOne?: Boolean;
  minusFive?: Boolean;
}

export default function getPageNumbers(
  currentPage: number,
  totalPages: number
): pageNumberProps {
  const pagination: pageNumberProps = { pages: [1] };
  if (currentPage > 4 && totalPages != 5) {
    pagination.minusFive = true;
    var dif = totalPages - currentPage > 4 ? 2 : 4 - totalPages + currentPage;
    pagination.pages.push(
      ...Array.from({ length: 5 }, (_, i) => currentPage + i - dif)
    );
  } else {
    pagination.pages.push(
      ...Array.from(
        { length: totalPages < 5 ? totalPages : 4 },
        (_, i) => i + 2
      )
    );
    !pagination.pages.includes(totalPages) && pagination.pages.push(totalPages);
  }

  pagination.plusFive = currentPage < totalPages - 4;

  !pagination.pages.includes(totalPages) && pagination.pages.push(totalPages);

  return pagination;
}
