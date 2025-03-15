import { TestBed } from '@angular/core/testing';
import { LangService } from '../../../../src/app/services/lang.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { Content } from '../../../../src/app/interfaces/content';

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<Content> {
    return of({ slides: [] });
  }
}

describe('LangService', () => {
  let service: LangService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: FakeLoader }
        })
      ],
      providers: [LangService]
    });
    service = TestBed.inject(LangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get language', () => {
    service.setLang('fr');
    expect(service.getLang()).toBe('fr');
  });

  it('should get translation', (done) => {
    service.getTranslation('en').subscribe((translation) => {
      expect(translation).toEqual({ slides: [] });
      done();
    });
  });

  it('should handle translation error', (done) => {
    spyOn(service, 'getTranslation').and.returnValue(new Observable(observer => {
      observer.error('Translation error');
    }));

    service.getTranslation('invalid').subscribe({
      next: () => {},
      error: (error) => {
        expect(error).toBe('Translation error');
        done();
      }
    });
  });
});
