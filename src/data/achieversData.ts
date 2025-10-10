
import divyamm from '../photos/divyamm.jpg'
import nitya from '../photos/nitya.jpg'
import harsh from '../photos/harsh.jpg'
import shivani from '../photos/shivani.jpg'
import janvi from '../photos/janvi.jpg'
import veer from '../photos/veer.jpg'
import ananya from '../photos/ananya.jpg'
import yatharath from '../photos/yatharath.jpg'

export interface Achiever {
id: string;
name: string;
marks: string;
class: string;
subjects: string[];
school: string;
image: string;
story?: string;

}

export const achieversData: Achiever[] = [
  {
    id: '1',
    name: 'Divyam Kaushik',
    marks: '95',
    class: 'Class XII',
    subjects: ['English'],
    school: 'Mother Divine',
    image: divyamm,
    story: 'Divyam Kaushik, a Class XII student from Mother Divine School, achieved an impressive 95 marks in English. His dedication and hard work have set a remarkable example for his peers.'
  },
  {
    id: '2',
    name: 'Nitya Rana',
    marks: '95',
    class: 'Class XI',
    subjects: ['English'],
    school: 'Jain Bharati',
    image: nitya,
    story: 'Nitya Rana, a Class XI student from Jain Bharati School, secured an outstanding 95 marks in English. Her consistent effort and passion for learning have greatly contributed to her success.'
  },
  {
    id: '3',
    name: 'Harsh Jha',
    marks: '91',
    class: 'Class XII',
    subjects: ['English'],
    school: 'Mata Sukhdevi',
    image: harsh,
    story: 'Harsh Jha, a Class XII student from Mata Sukhdevi School, achieved an impressive 91 marks in English. His dedication and hard work have set a remarkable example for his peers.'
  },
  {
    id: '4',
    name: 'Shivani',
    marks: '90',
    class: 'Class XII',
    subjects: ['Pol. Sci.'],
    school: 'SNPS',
    image: shivani,
    story: 'Shivani, a Class XII student from SNPS School, secured an outstanding 90 marks in Political Science. Her consistent effort and passion for learning have greatly contributed to her success.'
   
  },
     {
    id: '5',
    name: 'Janvi',
    marks: '90',
    class: 'Class XII',
    subjects: ['Pol. Sci.'],
    school: 'SGSSS',
    image: janvi,
    story: 'Janvi, a Class XII student from SGSSS School, achieved an impressive 90 marks in Political Science. Her dedication and hard work have set a remarkable example for her peers.'
  },
  {
    id: '6',
    name: 'Veer',
    marks: '90',
    class: 'Class XII',
    subjects: ['English'],
    school: 'VSPK',
    image: veer,
    story: 'Veer, a Class XII student from VSPK School, secured an outstanding 90 marks in English. His consistent effort and passion for learning have greatly contributed to his success.'
    
  },
  {
    id: '7',
    name: 'Ananya Srivastava',
    marks: '93',
    class: 'Class XII',
    subjects: ['English'],
    school: 'Sachdeva',
    image: ananya,
    story: 'Ananya Srivastava, a Class XII student from Sachdeva School, achieved an impressive 93 marks in English. Her dedication and hard work have set a remarkable example for her peers.' 
  
  },
  {
    id: '8',
    name: 'Yatharth Kochhar',
    marks: '94',
    class: 'Class XII',
    subjects: ['English'],
    school: 'Sachdeva',
    image: yatharath,
    story: 'Yatharth Kochhar, a Class XII student from Sachdeva School, secured an outstanding 94 marks in English. His consistent effort and passion for learning have greatly contributed to his success.'
  }
];