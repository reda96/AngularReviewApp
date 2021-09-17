import { Injectable } from '@angular/core';
import { Doctor } from './doctor.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  searchResult = new BehaviorSubject<Doctor[]>(null);
  doctors: Doctor[] = [
    new Doctor(
      'Hany Khalil',
      'Consultant in Cosmetic Dermatology and Andrology',
      4,
      300,
      [
        'Genital Dermatology',
        'Facial Plastic Surgery',
        'Andrology',
        'Adult Dermatology',
        'Cosmetic Dermatology and Laser',
      ],
      'Giza'
    ),
    new Doctor(
      'Rasha Ahmed Ibrahim',
      'A. Lecturer Endocrinology and Internal Medicine- Ain Shams University',
      4,
      150,
      [
        'Adult Dietitian and Nutrition',
        'Adult Diabetes and Endocrinology and Adult Internal Medicine',
      ],
      'El-Dokki'
    ),
    new Doctor(
      'Eman Tantawy',
      'Ph.D. and Consultant Oral and Maxillofacial Surgery',
      3.5,
      200,
      ['Adult Dietitian and Nutrition', 'Adult Physiotherapy'],
      'El-Mohandessin'
    ),
    new Doctor(
      'Ahmed Moftah',
      'Sepecialist of dental cosmetics and oral surgeries',
      5,
      150,

      [
        'Oral and Maxillofacial Surgery',
        'Orthodontics',
        'Prosthodontics',
        'Elder Dentistry',
        ' Oral Radiology',
        'Implantology',
      ],
      'Menia'
    ),
  ];
  constructor(private router: Router) {}

  onSearchDoctorByName(name: string) {
    const ds = this.doctors.slice();
    const result = ds.filter((dr) => dr.name.toLowerCase().includes(name));
    console.log(result);
    this.searchResult.next(result);
    this.router.navigate(['result']);
  }
}
