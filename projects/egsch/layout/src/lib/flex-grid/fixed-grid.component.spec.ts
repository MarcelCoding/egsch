import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FixedGridComponent} from './fixed-grid.component';

describe('FixedGridComponent', () => {
    let component: FixedGridComponent;
    let fixture: ComponentFixture<FixedGridComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FixedGridComponent]
        });
        fixture = TestBed.createComponent(FixedGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
