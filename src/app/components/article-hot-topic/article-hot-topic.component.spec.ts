import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleHotTopicComponent } from './article-hot-topic.component';

describe('ArticleHotTopicComponent', () => {
  let component: ArticleHotTopicComponent;
  let fixture: ComponentFixture<ArticleHotTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleHotTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleHotTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
