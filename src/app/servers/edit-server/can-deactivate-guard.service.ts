import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactvateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(
        component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
        ): Observable<boolean> | Promise<boolean> | boolean {
            return component.canDeactivate();
    }
}
