// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { FC, SVGProps } from 'react';
import LogoBase from '../LogoBase/LogoBase';
import { LogoBaseProps } from '../LogoBase/LogoBase.types';

const MinIOEnterpriseOSVertical: FC<SVGProps<any> & LogoBaseProps> = ({
  inverse,
  onClick,
}) => {
  return (
    <LogoBase
      id="teste"
      viewBox="0 0 18 18"
      inverse={inverse}
      onClick={onClick}
    >
      <g clipPath="url(#clip0_213_382)">
        <path
          d="M11.6839 0H6.28662L0 18H1.56091C2.45026 18 3.31661 17.7252 4.03492 17.2153C4.75323 16.7054 5.28635 15.9867 5.55736 15.163L9.00232 4.70914L12.676 15.163C12.9652 15.9903 13.5135 16.7088 14.244 17.2176C14.9746 17.7264 15.8506 18 16.7492 18H18L11.6839 0Z"
          fill="#4C72E2"
        />
      </g>
      <defs>
        <clipPath id="clip0_213_382">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </LogoBase>
  );
};

export default MinIOEnterpriseOSVertical;
