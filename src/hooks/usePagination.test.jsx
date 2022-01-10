import { fireEvent, render, screen } from '@testing-library/react';
import UsePaginationExample from './usePagination';

describe('usePagination', () => {
  it.skip('should be able to update the current page when requested', async () => {
    render(<UsePaginationExample totalPages={5} />);

    const firstPageButton = screen.getByRole('button', {
      name: 'view first page',
    });
    const prevPageButton = screen.getByRole('button', {
      name: 'view previous page',
    });
    const nextPageButton = screen.getByRole('button', {
      name: 'view next page',
    });
    const lastPageButton = screen.getByRole('button', {
      name: 'view last page',
    });

    // validate that we're on the first page.
    // we use `.findBy` here because the total pages
    // will be updated asynchronously
    await screen.findByText('1 / 5');

    // validate the initial state
    expect(firstPageButton).toBeDisabled();
    expect(prevPageButton).toBeDisabled();
    expect(nextPageButton).not.toBeDisabled();
    expect(lastPageButton).not.toBeDisabled();

    // go to the next page and re-validate everything
    fireEvent.click(nextPageButton);
    expect(firstPageButton).not.toBeDisabled();
    expect(prevPageButton).not.toBeDisabled();
    expect(nextPageButton).not.toBeDisabled();
    expect(lastPageButton).not.toBeDisabled();
    await screen.findByText('2 / 5');

    // go to the last page & re-validate
    fireEvent.click(lastPageButton);
    expect(firstPageButton).not.toBeDisabled();
    expect(prevPageButton).not.toBeDisabled();
    expect(nextPageButton).toBeDisabled();
    expect(lastPageButton).toBeDisabled();
    await screen.findByText('5 / 5');

    // go to the first page & re-validate
    fireEvent.click(firstPageButton);
    expect(firstPageButton).toBeDisabled();
    expect(prevPageButton).toBeDisabled();
    expect(nextPageButton).not.toBeDisabled();
    expect(lastPageButton).not.toBeDisabled();
    await screen.findByText('1 / 5');
  });
});
