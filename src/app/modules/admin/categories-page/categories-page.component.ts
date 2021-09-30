import { Observable } from 'rxjs';
import { Component, Inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { NotificationService } from 'src/app/services/notification.service';
import {
  createCategory,
  deleteCategory,
  updateCategory,
} from 'src/app/store/categories/categories.action';
import { AppState } from 'src/app/store/app.state';
import { CategoryService } from 'src/app/services/category.service';
import { selectCategories } from 'src/app/store/categories/categories.selector';
import { Category } from 'src/app/store/categories/categories.model';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent {
  categories: Observable<Category[]> = this.store.pipe(
    select(selectCategories)
  );

  constructor(
    private categoryService: CategoryService,
    private store: Store<AppState>,
    public dialog: MatDialog,
    private notificationService: NotificationService
  ) {}

  openDialog(category: Category) {
    this.dialog.open(DialogUpdate, {
      data: {
        id: category.id,
        categoryName: category.categoryName,
      },
    });
  }

  create(data: Category) {
    this.categoryService.createCategory(data).subscribe(
      (category) => {
        this.store.dispatch(createCategory({ newCategory: category }));
        this.notificationService.success('Category was created');
      },
      (error) => {
        const { message } = error.error;
        this.notificationService.error(message);
      }
    );
  }

  delete(id: string) {
    if (confirm('Are you sure you want to delete this product')) {
      this.categoryService.deleteCategoryById(id).subscribe((res) => {
        this.store.dispatch(deleteCategory({ id: id }));
        this.notificationService.success('Category was deleted');
      });
    }
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.html',
})
export class DialogUpdate {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Category,
    public dialogRef: MatDialogRef<DialogUpdate>,
    public categoryService: CategoryService,
    private store: Store<AppState>,
    private notificationService: NotificationService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveCategory() {
    this.categoryService.updateByIdCategory(this.data.id, this.data).subscribe(
      (response) => {
        this.store.dispatch(updateCategory({ updatedCategory: response }));
        this.dialogRef.close();
        this.notificationService.success('Category was updated');
      },
      (error) => {
        const { message } = error.error;
        this.notificationService.error(message);
      }
    );
  }
}
